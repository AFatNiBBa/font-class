
/** The prefix of the customization CSS variables */
export const CSS_VARIABLE_PREFIX = "--solid-fa6-pro-";

/**
 * Applies the {@link CSS_VARIABLE_PREFIX} to each property of {@link opts}
 * @param opts The object on which to prefix the properties 
 */
export function custom(opts: IconOpts) {
    const out: { [k in keyof IconOpts as `${typeof CSS_VARIABLE_PREFIX}${k}`]: IconOpts[k] } = {};
    for (const k in opts)
        out[`${CSS_VARIABLE_PREFIX}${k as keyof IconOpts}`] = opts[k as keyof IconOpts] as any;
    return out;
}

/** Type that lists the available customization CSS variables */
export interface IconOpts {

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
    beatScale?: string;
    
    /** Custom override of the horizontal start scale for the {@link anim.bounce} animation */
    bounceStartScaleX?: string;
    
    /** Custom override of the vertical start scale for the {@link anim.bounce} animation */
    bounceStartScaleY?: string;
    
    /** Custom override of the horizontal jump scale for the {@link anim.bounce} animation */
    bounceJumpScaleX?: string;
    
    /** Custom override of the vertical jump scale for the {@link anim.bounce} animation */
    bounceJumpScaleY?: string;
    
    /** Custom override of the jump height for the {@link anim.bounce} animation */
    bounceJumpHeight?: string;
    
    /** Custom override of the horizontal land scale for the {@link anim.bounce} animation */
    bounceLandScaleX?: string;
    
    /** Custom override of the vertical land scale for the {@link anim.bounce} animation */
    bounceLandScaleY?: string;
    
    /** Custom override of the rebound for the {@link anim.bounce} animation */
    bounceRebound?: string;
    
    /** Custom override of the opacity for the {@link anim.fade} animation */
    fadeOpacity?: string;
    
    /** Custom override of the opacity for the {@link anim.beat} animation */
    beatFadeOpacity?: string;
    
    /** Custom override of the scale for the {@link anim.beat} animation */
    beatFadeScale?: string;
    
    /** Custom override of the X component of the rotation axis vector for the {@link anim.flip} animation */
    flipX?: string;
    
    /** Custom override of the Y component of the rotation axis vector for the {@link anim.flip} animation */
    flipY?: string;
    
    /** Custom override of the Z component of the rotation axis vector for the {@link anim.flip} animation */
    flipZ?: string;
    
    /** Custom override of the rotation angle for the {@link anim.flip} animation */
    flipAngle?: string;
}