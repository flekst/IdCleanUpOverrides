#target "Indesign"
/**
 Сбрасывает изменения стилей для выбранных текстовых блоков
 (c) 2014 Евгений Борисов .
 */

try {
    var mySel = app.activeDocument.selection;
    var l = mySel.length;
 } catch (err) { 
     try {
        mySel.paragraphs.everyItem().clearOverrides(OverrideType.ALL);
      } catch (err) {}
 	exit(); 
 }   
 
 var i=0;
 while (i++ < l ) {
     try {
        mySel[i].paragraphs.everyItem().clearOverrides(OverrideType.ALL);
      } catch (err) {}
}

