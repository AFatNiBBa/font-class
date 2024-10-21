
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-disappointed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-disappointed?s=sharp-duotone-solid face-disappointed}
 * @preview ![face-disappointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-disappointed.svg)
 */
const FaceDisappointed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm93.6 34.8l15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c3.8-3.8 7.5-7.5 11.3-11.3L222.6 256c-3.8 3.8-7.5 7.5-11.3 11.3c-2.5 2.5-4.9 4.9-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4c-5.3 .9-10.5 1.8-15.8 2.6c-1.8-10.5-3.5-21-5.3-31.6zm67.8 110.3l10.7-11.9C188.2 371.4 216.3 352 256 352s67.8 19.4 83.9 37.3l10.7 11.9-23.8 21.4-10.7-11.9c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7l-10.7 11.9-23.8-21.4zM289.4 256L312 233.4c3.8 3.8 7.5 7.5 11.3 11.3c2.5 2.5 4.9 4.9 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7c.8 .1 1.7 .3 2.5 .4c5.3 .9 10.5 1.8 15.8 2.6l-5.3 31.6c-5.3-.9-10.5-1.8-15.8-2.6c-.8-.1-1.7-.3-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7c-2.5-2.5-4.9-4.9-7.4-7.4c-3.8-3.8-7.5-7.5-11.3-11.3z" />
        <path d="M211.3 267.3l-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 233.4 222.6 256l-11.3 11.3zm89.4 0L289.4 256 312 233.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z" />
    </Icon>
);

export default FaceDisappointed;