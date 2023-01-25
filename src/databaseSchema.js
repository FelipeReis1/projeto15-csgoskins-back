const User = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
};

const Product = {
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string()
};

const Cart = {
  user_id: Joi.objectId(),
  items: Joi.array().items(
    Joi.object({
      product_id: Joi.objectId(),
      quantity: Joi.number().required(),
    })
  )
};

const Order = {
  user_id: Joi.objectId(),
  items: Joi.array().items(
    Joi.object({
      product_id: Joi.objectId(),
      quantity: Joi.number().required(),
    })
  ),
  total: Joi.number().required()
};


