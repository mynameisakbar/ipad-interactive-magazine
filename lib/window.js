/*--------------------------------------------------------
 * Copyright © 2009 – 2010* France Telecom
 * This software is distributed under the "Simplified BSD license",
 * the text of which is available at http://www.winktoolkit.org/licence.txt
 * or see the "license.txt" file for more details.
 *--------------------------------------------------------*/

/**
 * Implements the Window component that captures resize and scroll events and warns listeners of changes.
 * It Handles with these properties: 
 * 		{
 * 			screenWidth
 * 			screenHeight
 * 			width
 * 			height
 * 			orientation
 * 		}
 * 
 * @methods:
 *	--> getProperties: Returns the window component properties.
 *
 * @events
 * 	--> /window/events/resize				: when window is resized
 * 	--> /window/events/orientationchange	: when orientation changed
 * 
 * @compatibility
 *  --> Iphone OS2, Iphone OS3, Iphone OS4, Android 1.1, Android 1.5, Android 2.1, Android 2.2, Android 2.3, BlackBerry 6, Bada 1.0
 * 
 * @author:
 * 	--> Sylvain LALANDE
 */
wink.ux.Window = function()
{
	if (wink.isUndefined(wink.ux.Window.singleton))
	{
		this.uId 			= 1;
		this._properties 	= null;
		this._initialized 	= false;
		
		this._initWindow();
		this._initListeners();

		wink.ux.Window.singleton = this;
	} else
	{
		return wink.ux.Window.singleton;
	}
};

wink.ux.Window.prototype =
{
	VERTICAL_ORIENTATION: "vertical",
	HORIZONTAL_ORIENTATION: "horizontal",
		
	/**
	 * Returns the window properties.
	 */
	getProperties: function()
	{
		return this._properties;
	},
	/**
	 * Initialize properties.
	 */
	_initWindow: function()
	{
		this._properties = {};
		this._updateScreen();
		this._updateSize();
		this._initialized = true;
	},
	/**
	 * Update the window size. Returns true if size has changed.
	 */
	_updateScreen: function()
	{
		this._properties.screenWidth = screen.width;
		this._properties.screenHeight = screen.height;
	},
	/**
	 * Update the window size. Returns true if size has changed.
	 */
	_updateSize: function()
	{
		var changes = false;
		
		if (this._properties.width != document.documentElement.offsetWidth && document.documentElement.offsetWidth > 0)
		{
			this._properties.width 	= document.documentElement.offsetWidth;
			changes = true;
		}
		if (this._properties.height != document.documentElement.offsetHeight && document.documentElement.offsetHeight > 0)
		{
			this._properties.height = document.documentElement.offsetHeight;
			changes = true;
		}
		if (changes)
		{
			var orientationChange = false;
			if (this._properties.screenWidth >= this._properties.width)
			{
				if (this._properties.orientation != this.VERTICAL_ORIENTATION)
				{
					this._properties.orientation = this.VERTICAL_ORIENTATION;
					orientationChange = true;
				}
			}
			else if (this._properties.orientation != this.HORIZONTAL_ORIENTATION)
			{
				this._properties.orientation = this.HORIZONTAL_ORIENTATION;
				orientationChange = true;
			}
			if (orientationChange && this._initialized == true)
			{
				wink.publish("/window/events/orientationchange", this._properties);
			}
		}
		return changes;
	},
	/**
	 * Handle resize event.
	 */
	_handleResize: function()
	{
		if (this._updateSize())
		{
			wink.publish("/window/events/resize", this._properties);
		}
	},
	/**
	 * Initialize listeners
	 */
	_initListeners: function() 
	{
		var handler = wink.bind(this._handleResize, this);
		window.addEventListener("resize", handler, true);
		window.addEventListener("scroll", handler, true);
	}
};
