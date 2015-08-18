//where our iterators live
var o_o = {
  each: function(array, callback) {
    for (var i = 0; i < array.length; i++){
      var results = array[i];
      callback(results);
    }
  },

  map: function(array, callback) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] + 1);
    }
          return newArray;
  },

  filter: function(array, callback) {
    newArray = [];
    for (var i=0; i<array.length;i++) {
      if (array[i] % 2 ===0) {
        newArray.push(array[i]) 
      }
    }
    return newArray;
    }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;
