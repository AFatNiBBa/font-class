
import type anim from "./style/anim.module.scss";
import type generic from "./style/generic.module.scss";

import { Property } from "csstype";

/** The prefix of the customization CSS variables */
export const CSS_VARIABLE_PREFIX = "--font-class-";

/**
 * Applies the {@link CSS_VARIABLE_PREFIX} to each property of {@link opts}
 * @param opts The object on which to prefix the properties 
 */
export function custom<T extends IconOpts>(obj: T) {
	const out: { [k in Extract<keyof T, string> as `${typeof CSS_VARIABLE_PREFIX}${k}`]: T[k] } = {} as any;
	for (const k in obj)
		out[`${CSS_VARIABLE_PREFIX}${k}`] = obj[k] as any;
	return out;
}

/** Type that lists the available customization CSS variables */
export interface IconOpts {

	/** Custom override of the color for secondary part of icons */
	primaryColor?: Property.Color;

	/** Custom override of the opacity for secondary part of icons */
	primaryOpacity?: Property.Opacity;

	/** Custom override of the color for secondary part of icons */
	secondaryColor?: Property.Color;

	/** Custom override of the opacity for secondary part of icons */
	secondaryOpacity?: Property.Opacity;

	/** Custom angle for the {@link generic.rotateBy} class */
	rotateAngle?: Property.Rotate;

	/** Custom override of the {@link CSSStyleDeclaration.animationDelay} property of icons */
	animationDelay?: Property.AnimationDelay;

	/** Custom override of the {@link CSSStyleDeclaration.animationDirection} property of icons */
	animationDirection?: Property.AnimationDirection;

	/** Custom override of the {@link CSSStyleDeclaration.animationDuration} property of icons */
	animationDuration?: Property.AnimationDuration;

	/** Custom override of the {@link CSSStyleDeclaration.animationIterationCount} property of icons */
	animationIterationCount?: Property.AnimationIterationCount;

	/** Custom override of the {@link CSSStyleDeclaration.animationTimingFunction} property of icons */
	animationTimingFunction?: Property.AnimationTimingFunction;

	/** Custom override of the scale for the {@link anim.beat} animation */
	beatScale?: Property.Scale;
	
	/** Custom override of the opacity for the {@link anim.fade} animation */
	fadeOpacity?: Property.Opacity;
	
	/** Custom override of the scale for the {@link anim.beat} animation */
	beatFadeScale?: Property.Scale;
	
	/** Custom override of the opacity for the {@link anim.beat} animation */
	beatFadeOpacity?: Property.Opacity;
	
	/** Custom override of the horizontal start scale for the {@link anim.bounce} animation */
	bounceStartScaleX?: Property.Scale;
	
	/** Custom override of the vertical start scale for the {@link anim.bounce} animation */
	bounceStartScaleY?: Property.Scale;
	
	/** Custom override of the horizontal jump scale for the {@link anim.bounce} animation */
	bounceJumpScaleX?: Property.Scale;
	
	/** Custom override of the vertical jump scale for the {@link anim.bounce} animation */
	bounceJumpScaleY?: Property.Scale;
	
	/** Custom override of the jump height for the {@link anim.bounce} animation */
	bounceJumpHeight?: Property.Translate;
	
	/** Custom override of the horizontal land scale for the {@link anim.bounce} animation */
	bounceLandScaleX?: Property.Scale;
	
	/** Custom override of the vertical land scale for the {@link anim.bounce} animation */
	bounceLandScaleY?: Property.Scale;
	
	/** Custom override of the rebound for the {@link anim.bounce} animation */
	bounceRebound?: Property.Translate;
	
	/** Custom override of the X component of the rotation axis vector for the {@link anim.flip} animation */
	flipX?: Property.Translate;
	
	/** Custom override of the Y component of the rotation axis vector for the {@link anim.flip} animation */
	flipY?: Property.Translate;
	
	/** Custom override of the Z component of the rotation axis vector for the {@link anim.flip} animation */
	flipZ?: Property.Translate;
	
	/** Custom override of the rotation angle for the {@link anim.flip} animation */
	flipAngle?: Property.Rotate;
}