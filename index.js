const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn ) {
      for(let index in collection){
        fn(collection[index], index, collection)
      };
      return collection

    },

    map: function(collection, fn) {
      const newColl = [];
      for(let index in collection){
        newColl.push(fn(collection[index], index, collection))
      }
      return newColl


    },

    reduce: function(collection, fn, initalValue = null) {
      if (initalValue){
      let acc = initalValue;
      for(let c of collection ){
        acc = fn(c, acc, collection);
      }
      return acc
    } else {
      let acc = collection[0];
      for(let i=1; i<collection.lenght; i++) {
        acc = fn(acc,collection[i], collection )
      }
      return acc
    }

    },

    find: function(collection, fn) {
      let predicate
      for (let elem of collection){
        if (fn(elem)){
          predicate = elem
          break;
          
        }
        
      }
      return predicate
    },

    filter: function(collection, fn){
      const arr = [];
      for (let elem of collection){
        if (fn(elem)) arr.push(elem);
      }
      return  arr 
      
    },

    size: function(collection){
      let count = 0
      for (const char in collection){
        count++;
      }
      return count
    },
    first: function(collection, n ){
      if (!n){
      return collection[0]
    }
      const arr = [];
      for(let i = 0; i<n; i++){
        arr.push(collection[i]);

      };
      return arr
     
    },

    last: function(collection, n){
      if (!n) {
        return collection[collection.length-1]
      }

      const arr = [];
      for(let i = n; i <= collection.length; i++){
        arr.push(collection[i])
      }
    return arr
    }


  }
})()

fi.libraryMethod()
