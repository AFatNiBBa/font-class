
import type anim from "./style/anim.module.scss";
import type generic from "./style/generic.module.scss";

/** The prefix of the customization CSS variables */
export const CSS_VARIABLE_PREFIX = "--solid-fa6-pro-";

/**
 * Applies the {@link CSS_VARIABLE_PREFIX} to each property of {@link opts}
 * @param opts The object on which to prefix the properties 
 */
export function custom<T extends IconOpts>(obj: T) {
    const out: { [k in Extract<keyof T, string> as `${typeof CSS_VARIABLE_PREFIX}${k}`]: T[k] } = <any>{};
    for (const k in obj)
        out[`${CSS_VARIABLE_PREFIX}${k}`] = <any>obj[k];
    return out;
}

/** Type that lists the available customization CSS variables */
export interface IconOpts {

    /** Custom angle for the {@link generic.secondary} class */
    secondaryOpacity?: number | string;

    /** Custom angle for the {@link generic.rotateBy} class */
    rotateAngle?: number | string;

    /** Custom override of the {@link CSSStyleDeclaration.animationDelay} property of icons */
    animationDelay?: number | string;

    /** Custom override of the {@link CSSStyleDeclaration.animationDirection} property of icons */
    animationDirection?: string;

    /** Custom override of the {@link CSSStyleDeclaration.animationDuration} property of icons */
    animationDuration?: number | string;

    /** Custom override of the {@link CSSStyleDeclaration.animationIterationCount} property of icons */
    animationIterationCount?: number | string;

    /** Custom override of the {@link CSSStyleDeclaration.animationTimingFunction} property of icons */
    animationTimingFunction?: string;

    /** Custom override of the scale for the {@link anim.beat} animation */
    beatScale?: number | string;
    
    /** Custom override of the opacity for the {@link anim.fade} animation */
    fadeOpacity?: number | string;
    
    /** Custom override of the scale for the {@link anim.beat} animation */
    beatFadeScale?: number | string;
    
    /** Custom override of the opacity for the {@link anim.beat} animation */
    beatFadeOpacity?: number | string;
    
    /** Custom override of the horizontal start scale for the {@link anim.bounce} animation */
    bounceStartScaleX?: number | string;
    
    /** Custom override of the vertical start scale for the {@link anim.bounce} animation */
    bounceStartScaleY?: number | string;
    
    /** Custom override of the horizontal jump scale for the {@link anim.bounce} animation */
    bounceJumpScaleX?: number | string;
    
    /** Custom override of the vertical jump scale for the {@link anim.bounce} animation */
    bounceJumpScaleY?: number | string;
    
    /** Custom override of the jump height for the {@link anim.bounce} animation */
    bounceJumpHeight?: number | string;
    
    /** Custom override of the horizontal land scale for the {@link anim.bounce} animation */
    bounceLandScaleX?: number | string;
    
    /** Custom override of the vertical land scale for the {@link anim.bounce} animation */
    bounceLandScaleY?: number | string;
    
    /** Custom override of the rebound for the {@link anim.bounce} animation */
    bounceRebound?: number | string;
    
    /** Custom override of the X component of the rotation axis vector for the {@link anim.flip} animation */
    flipX?: number | string;
    
    /** Custom override of the Y component of the rotation axis vector for the {@link anim.flip} animation */
    flipY?: number | string;
    
    /** Custom override of the Z component of the rotation axis vector for the {@link anim.flip} animation */
    flipZ?: number | string;
    
    /** Custom override of the rotation angle for the {@link anim.flip} animation */
    flipAngle?: number | string;
}