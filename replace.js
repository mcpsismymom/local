var newContent='<html><head><script language="Javascript">function Hi() {alert("Goodbye World");}</script></head><body onload="Hi();">New Content</body></html>';
      function ReplaceContent(NC) {
        document.open();
        document.write(NC);
        document.close();
      }
      function Hi() {
        ReplaceContent(newContent);
      }
Hi()
