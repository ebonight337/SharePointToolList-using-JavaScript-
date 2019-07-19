<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous">
</script>

<script>
"use strict";

function getUserProperties(){
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    personProperties = peopleManager.getMyProperties();
    clientContext.load(personProperties);
    clientContext.executeQueryAsync(onRequestSuccess, error);
}

function onRequestSuccess(){
    var departmentproperty = personProperties.get_userProfileProperties()['Department']
    $("#Department").parent ().parent ().children (1).find ("input").val (decodeURI(departmentproperty));
    var workPhone = fsw.plotvar.personProperties.get_userProfileProperties()['WorkPhone'];
    $("#ExternalTel").parent ().parent ().children (1).find ("input").val (decodeURI(workPhone));
}

function error(sender, args){
    alert(args.get_message());
};
