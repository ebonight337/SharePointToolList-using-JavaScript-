<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous">
</script>

<script>
"use strict";

var userid = "i:0#.f|membership|" + "sendie@hogehoge.onmicrosoft.com"
if(userid){
    SP.SOD.executeFunc ("clientpeoplepicker.js", "SPClientPeoplePicker", function(){
        var objUserField = $("#[PeopleColumn]").parent ().parent ().children (1).find ("input[id$='ClientPeoplePicker_EditorInput']").get (0);
        var objPeoplePicker = SPClientPeoplePicker.PickerObjectFromSubElement (objUserField);
        objPeoplePicker.AddUserKeys (userid);
    })
}
