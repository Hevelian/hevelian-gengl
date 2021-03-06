/**
 * (C) Hevelian 2013
 *
 * This defines all the core methods required for the correct operation of a Widget.
 * 
 * When the Dashboard object creates a new component it passes the entire XML to the component (__node). 
 * If the component is part of an 'instance' (for example, it lives inside a Window object that has just been opened) then it also have a unique __prefix.
 * 
 * The Dashboard will automatically create a Container to put the actual object inside of. The Dashboard is responsible for figuring out all the
 * Container stuff, including headers, toolbars and styling, and will pass the actual __target DIV to the object in which it should be rendered.
 * If the Container includes headers and toolbars then the Dashboard will set the '_hideShowId' to the outer DIV, enabling the hide/show functions
 * to work correctly.
 * 
 * Once the object has been created the Dashboard will also call the SetEventHandler, SetDashboard and SetHideShowId to initialise some parameters.
 * This always takes place before the Draw method is called, so you can trust that they have been initialised correctly.
 * 
 * The _me reference to 'this' is sometimes necessary because some third party components fiddle with it and break stuff. Internally if you always refer to _me
 * you should be fine.
 * 
 * The value of 'this.type' should be some human readable name - it is only used by the debugger for display purposes.
 */

function ObjectTemplate(__node, __target, __prefix)
{
	this.type								= 'ObjectTemplate';
	
	var _id									= __prefix + __node.getAttribute('id');
	var _prefix							= __prefix;
	var _target							= __target;
	var _xml								= __node;
	var _hideShowId					= _id;
	var _properties						= [];
	var _handler							= null;
	var _dashboard						= null;
	var _me								= this;
	
	this.Draw								= _draw;
	this.Redraw							= _redraw;
	this.GetProperty					= _getProperty;
	this.Hide								= _hide;
	this.Show								= _show;
	this.ToggleHideShow				= _toggleHideShow;
	this.SetEventHandler				= function _setEventHandler(__handler) { _handler = __handler; }
	this.SetHideShowId				= function _setHideShowId(_value) { _hideShowId = _value; }
	this.SetDashboard					= function _setDashboard(_value) { _dashboard = _value; }
	this.GetId								= function _getID() { return _id; }

	/**
	 * Draw()
	 * Should draw the static parts of the object, create any internal objects required and generally initialise stuff. 
	 * Included in the initialisation is the mapping of events from an underlying object to events fired off to the EventHandler.
	 * Normally this method gets called once when the page is loaded and then never again.
	 * It usually calls the _redraw() method once the initialisation has been done.
	 */
	function _draw()
	{
		_redraw();
	}
	
	/**
	 * Redraw()
	 * When an event occurs that causes a 'refresh' the Redraw method gets called for any objects that want that event.
	 * The Redraw() method is where actual redering to the screen takes place - theoretically the only place.
	 */
	function _redraw()
	{
		
	}
	
	/**
	 * GetProperty()
	 * returns the value associated with the 'name'. The actual properties could be stored in the internal array or may be fetched from an underlying object,
	 * or a combination of both.
	 * 
	 * @param _name
	 */
	function _getProperty(_name)
	{
		
	}
	
	/**
	 * ToggleHideShow()
	 * Flips the hide/show status. 
	 * 
	 * @returns {String}
	 */
	function _toggleHideShow()
	{
		var _div = document.getElementById(_hideShowId);
		if(_div==null) return;
		
		if(_div.style.display=='none') return _div.style.display = 'block';
		_div.style.display = 'none';
	}
	
	/**
	 * Hide()
	 * Hides the main div for this object.
	 */
	function _hide()
	{
		var _div = document.getElementById(_hideShowId);
		if(_div==null) return;
		
		if(_div.style.display=='none') return;
		_div.style.display = "none";
		
	}
	
	/**
	 * Show()
	 * Shows the main div for this object.
	 */
	function _show()
	{
		var _div = document.getElementById(_hideShowId);
		if(_div==null) return;
		
		if(_div.style.display=='block') return;
		_div.style.display = "block";
		
	}
	
}
