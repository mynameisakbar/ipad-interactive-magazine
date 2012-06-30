var scrollerHelper =
{
    scrollers: [],
    scroller: null,
    scrollEnabled: true,

    init: function()
    {
        wink.ux.touch.addListener($('header'), "start", {
            context: this,
            method: "onTouchHeaderFooter"
        });
        wink.ux.touch.addListener($('header'), "end", {
            context: this,
            method: "onTouchHeaderFooter"
        });

        wink.ux.touch.addListener($('footer'), "start", {
            context: this,
            method: "onTouchHeaderFooter"
        });
        wink.ux.touch.addListener($('footer'), "end", {
            context: this,
            method: "onTouchHeaderFooter"
        });
    },

    onTouchHeaderFooter: function(uxEvent)
    {
        if (uxEvent.type == "start")
        {
            this._startEvent = uxEvent;
            uxEvent.preventDefault();
        } else
        {
            this._endEvent = uxEvent;

            if (((this._endEvent.timestamp - this._startEvent.timestamp) < 250) && (Math.abs(this._endEvent.x - this._startEvent.x) < 20))
            {
                this._endEvent.dispatch(this._endEvent.target, 'click');
            }
        }

    },

    stageChanged: function(params, stage)
    {
        var target;

        if (wink.isSet(params.uxEvent))
        {
            target = params.uxEvent.target;
            target = (target.nodeType == 3 ? target.parentNode: target);
        }

        var isScrollerItem = this.onScrollerItem(target);

        if (stage == 'scrollerTouched')
        {
            if (isScrollerItem)
            {
                this.scrollEnabled = false;
                this.scroller.disable();
                return;
            } else
            {
                this.scrollEnabled = true;
                this.scroller.enable();
            }

        }
    },

    notifyVerticalMouvement: function()
    {
        if (this.scrollEnabled == false)
        {
            this.scrollEnabled = true;
            this.scroller.enable();
        }
    },

    buildHScrollers: function()
    {
        var properties =
        {
            direction: "xy",
            scrollbars: {
                active: false
            }
        };

        // H Scroller 1
        properties.target = "scrollContent1";
        scrollerHelper.scrollers.push(new wink.ui.layout.Scroller(properties));
    },

    onScrollerItem: function(node)
    {
        if (node && node.className && node.className == 'item')
        {
            return true;
        }
        return false;
    },

};

var mvtHandler =
{
    node: null,
    _notify: false,

    init: function(){
        this.node = $('wrapper');

        wink.ux.touch.addListener(this.node, "start", {
            context: this,
            method: "_start"
        },
        {
            captureFlow: true
        });
        wink.ux.touch.addListener(this.node, "move", {
            context: this,
            method: "_move"
        },
        {
            captureFlow: true
        });
        wink.ux.touch.addListener(this.node, "end", {
            context: this,
            method: "_end"
        },
        {
            captureFlow: true
        });
    },

    _start: function(uxEvent)
    {
        this._se = uxEvent;
        this._notify = false;
    },

    _move: function(uxEvent)
    {
        if (this._notify == true){
            return;
        }
        var dx = Math.abs(this._se.x - uxEvent.x);
        var dy = Math.abs(this._se.y - uxEvent.y);

        if (dy > 5){
            if (dy > dx){
                this._notify = true;
                scrollerHelper.notifyVerticalMouvement();
            }
        }
    },

    _end: function()
    {
        this._notify = true;
    }
};

var init = function()
{
    window.scrollTo(0, 0);

    wink.error.logLevel = 1;

    scrollerHelper.init();
    scrollerHelper.buildHScrollers();

    var wm = new wink.ux.Window();

    var headerHeight = 45;
    var footerHeight = 45;

    var heightRemains = wm.getProperties().height - headerHeight - footerHeight;

    //$('wrapper').style.height = 1200 + "px";
    //$('view1').style.height = 1200 + "px";

    var properties =
    {
        target: "scrollContent",
        direction: "y",
        callbacks:
        {
            scrollerTouched: {
                context: scrollerHelper,
                method: 'stageChanged',
                arguments: 'scrollerTouched'
            }
        },
        scrollbars:
        {
            backgroundColor: 'rgba(15, 15, 15, 0.5)',
            borderColor: 'rgba(255, 255, 255, 0.7)'
        }
    };

    //scrollerHelper.scroller = new wink.ui.layout.Scroller(properties);
    mvtHandler.init();
};