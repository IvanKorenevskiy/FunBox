import React from 'react';
import PropTipes from "prop-types";
import './product-form.scss';
import './product-form.scss';
import Cat from '../img/cat.png';


const BelowText = (props) => {
	return (
		<span>Чего сидишь? Порадуй котэ, <a href="#!" onClick={props.onClick}>купи.</a></span>
	)
}

const BelowTextDisabled = (props) => {
	return (
		<span className="product-form__yellow-text">Печалька, {props.ingredient} закончился.</span>
	)
}

const ProductForm = (props) => {
	const classes = []
	if (props.product.selected===true) {
		classes.push ("product-form__block-wrapper--selected");		
	}
	if (props.product.disabled===true) {
		classes.push ("product-form__block-wrapper--disabled");
	}
  	return (
  	<div className={`${props.className} product-form`}>
	    <div className={`${classes.join(' ')} product-form__block-wrapper`} onClick={() => props.OnClick(props.product.id)}>
	    	<span className="product-form__comment">
	    		Сказочное заморское яство
	    	</span>
	    	<div className="product-form__title">
	    		<span className="product-form__name">{props.product.name} </span>
	    		<span className="product-form__ingredient">{props.product.ingredient}</span>	    	 
	    	</div>
	    	<ul className="product-form__size">
		    	<li className="product-form__count"><span className="bold">{props.product.size}</span> порций</li>
		    	<li className="product-form__bonus">{props.product.bonus}</li>
	    	</ul>
	    	<img className="product-form__cat" src={Cat}/>	
	    	<div className="product-form__weight weight">
		    	<div className="weight__text">
		    		<span className="weight__value">{props.product.weight}</span>
		    		<span className="weight__kg">кг</span>
		    	</div>
	    	</div>
	    </div>
	    <div className="product-form__below-text">
	    	{props.product.disabled===false ? (
	    			props.product.selected===true ? props.product.description : <BelowText onClick={() => props.OnClick(props.product.id)}/>
	    		) : <BelowTextDisabled ingredient={props.product.ingredient}/>
	    	}
	    </div>
    </div>
  );
}

ProductForm.propTipes = {
  product: PropTipes.arrayOf(PropTipes.object).isRequied,
  OnClick: PropTipes.func.isRequied
}

export default ProductForm;
