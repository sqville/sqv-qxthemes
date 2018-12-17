/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * 
 * ========================================
 * ==== Require new Clean theme Mixins ====
 * ========================================
 * @require(sqv.theme.clean.MImage) 
 * @require(sqv.theme.clean.MAtom)
 * @require(sqv.theme.clean.MHeaderCell)
 * @require(sqv.theme.clean.MFreestyleCss)
 * @require(sqv.theme.clean.MPlacement)
 * @require(sqv.theme.clean.MSelectBox)
 * 
 * ========================================
 * ==== Require new Clean theme Class =====
 * ========================================
 * @require(sqv.theme.clean.Animation)
 * 
 * ========================================
 * ==== Require existing Qx classes =======
 * ========================================
 * @require(qx.ui.tree.core.AbstractItem)
 */

qx.Theme.define("sqv.theme.Clean",
{
  meta :
  {
    color : sqv.theme.clean.Color,
    decoration : sqv.theme.clean.Decoration,
    font : sqv.theme.clean.Font,
    icon : qx.theme.icon.Tango,
    appearance : sqv.theme.clean.Appearance
  },
  
  boot : function(){
  	/****************************************
       *  Mixin new clean-theme features 
       ****************************************/

    //*** FLAGS to turn on/off theme features ****

    // Make popups not so snappy by switching this FLAG to true
    // PURPOSE = Make popups fade in and out by default, and to control the speed in which they show and hide
    // STATUS = NOT STARTED - future feature 
    //var smoothpopups = false;
    //var smoothpopustheme = "";

    
    // MANDATORY Mixins

	  // Prep the Image widget to have font and SVG handling abilities
	  qx.Class.include(qx.ui.basic.Image, sqv.theme.clean.MImage);
	  
	  // Prep Atoms to have image property handling abilities
	  qx.Class.include(qx.ui.basic.Atom, sqv.theme.clean.MAtom);
	  
	  // Prep tables Header Cell to have image property handling abilities
	  qx.Class.include(qx.ui.table.headerrenderer.HeaderCell, sqv.theme.clean.MHeaderCell);
	  
	  // Enables adding CSS to tag and psudo classes (after and before) to the Decorator class
    qx.Class.include(qx.ui.decoration.Decorator, sqv.theme.clean.MFreestyleCss);
    
    // patch the _place method of the MPlacement Mixin for Popups class
    qx.Class.patch(qx.ui.popup.Popup, sqv.theme.clean.MPlacement);

    // Adjusts popup offset to allow for smoother transitions for SelectBox
    qx.Class.include(qx.ui.form.SelectBox, sqv.theme.clean.MSelectBox);

    // Prep Tree Items to have image property handling abilities
    qx.Class.include(qx.ui.tree.core.AbstractItem, sqv.theme.clean.MAtom);

  }
});