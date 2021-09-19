const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:
    {
      model: Product
    }

  })
  .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: "category not found"})
        return
      }
      res.json(cData)
    })
    .catch((err) => {
      console.log(err)
      res/status(500).json(err)
    })
    console.log(`displaying all categories`)
    console.log(`
    
    
    
    _,    _   _    ,_
    .o888P     Y8o8Y     Y888o.
   d88888      88888      88888b
  d888888b_  _d88888b_  _d888888b
  8888888888888888888888888888888
  8888888888888888888888888888888
  YJGS8P"Y888P"Y888P"Y888P"Y8888P
   Y888   '8'   Y8P   '8'   888Y
    '8o          V          o8'


    
    `)

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    Where: {
    id: req.params.id
  },
  include: {
    model: Product
  }
})
.then((cData) => {
  if(!cData) {
    res.status(404).json({message: "category product not found" })
    return
  }
  res.json(cData);
})
.catch((err) => {
  console.log(err)
res.status(500).json(err)
})
console.log(`category found`)
console.log(`
    
    
    
    _,    _   _    ,_
    .o888P     Y8o8Y     Y888o.
   d88888      88888      88888b
  d888888b_  _d88888b_  _d888888b
  8888888888888888888888888888888
  8888888888888888888888888888888
  YJGS8P"Y888P"Y888P"Y888P"Y8888P
   Y888   '8'   Y8P   '8'   888Y
    '8o          V          o8'


    
    `)

});



router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((cData) => {
    res.json(cData)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json(err);
  })
  console.log(`category category`)
  console.log(`
    
    
    
    _,    _   _    ,_
    .o888P     Y8o8Y     Y888o.
   d88888      88888      88888b
  d888888b_  _d88888b_  _d888888b
  8888888888888888888888888888888
  8888888888888888888888888888888
  YJGS8P"Y888P"Y888P"Y888P"Y8888P
   Y888   '8'   Y8P   '8'   888Y
    '8o          V          o8'


    
    `)

});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: "category not found"});
        return;
      }
      res.json(cData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    console.log(`category update`);
    console.log(`
    
    
    
    _,    _   _    ,_
    .o888P     Y8o8Y     Y888o.
   d88888      88888      88888b
  d888888b_  _d88888b_  _d888888b
  8888888888888888888888888888888
  8888888888888888888888888888888
  YJGS8P"Y888P"Y888P"Y888P"Y8888P
   Y888   '8'   Y8P   '8'   888Y
    '8o          V          o8'


    
    `)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((cData)=> {
    if (!cData) {
      res.status(400).json({message: "category not found"})
      return
    }
    res.json(cData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
  console.log(`category erase`)
  console.log(`


  _,    _   _    ,_
  .o888P     Y8o8Y     Y888o.
 d88888      88888      88888b
d888888b_  _d88888b_  _d888888b
8888888888888888888888888888888
8888888888888888888888888888888
YJGS8P"Y888P"Y888P"Y888P"Y8888P
 Y888   '8'   Y8P   '8'   888Y
  '8o          V          o8'
  
  
  `)
});

module.exports = router;
