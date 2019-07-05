var UserProfile = (function() {
    var user_name = "";
    var isLoggedIn = false;
    var getName = function() {
      return user_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      user_name = name;     
      // Also set this in cookie/localStorage
    };
  
    var get_isLoggedIn = function(){
      return isLoggedIn;
    }
  
    var set_isLoggedIn = function(bool){
      isLoggedIn = bool;
    }
  
    return {
      getName: getName,
      setName: setName,
      get_isLoggedIn : get_isLoggedIn,
      set_isLoggedIn : set_isLoggedIn
    }
  
  })();
  
export default UserProfile;