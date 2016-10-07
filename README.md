# loopObject
just like forEach but for Object

# Install
```bash
npm install loopobject --save 
```
# Use

```js
import loopObject from "loopobject"; 
var data = {
  '2016-09-15': {
      price: 34,
      available: 45
  },
  '2016-09-16': {
      price: 34,
      available: 45
  },
  '2016-09-17': {
      price: 34,
      available: 45
  },
  '2016-09-18': {
      price: 34,
      available: 45
   }
}

loopObject(data, function(v, staydate){
  console.log(`Price of HotelRoom on ${staydate} is ${v.price}`);
}, true);
```
