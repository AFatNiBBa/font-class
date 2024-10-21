
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug-bottle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-bottle?s=duotone jug-bottle}
 * @preview ![jug-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/jug-bottle.svg)
 */
const JugBottle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M400.4 187c10 20.9 15.6 44.3 15.6 69l0 135.4c.3 .2 .7 .4 1 .6c-.3 .2-.7 .4-1 .6l0 55.4c0 16.9-4.3 32.7-12 46.5c11.5 10.9 27 17.5 44 17.5l128 0c35.3 0 64-28.7 64-64c0-24.1-13.3-45.1-33-56c19.7-10.9 33-31.9 33-56c0-23.5-12.6-44-31.5-55.1c18.7-10.1 31.5-29.9 31.5-52.7c0-23.2-13.4-44.3-34.4-54.2l-13.2-6.2c-11-5.1-23-7.8-35.1-7.8l-90.6 0c-12.1 0-24.1 2.7-35.1 7.8L418.4 174c-6.9 3.2-13 7.7-18 13zM448 88l0 40 128 0 0-40c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24z" />
        <path d="M96 24c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 24 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 96C74.7 96 64 85.3 64 72s10.7-24 24-24l8 0 0-24zM0 256c0-70.7 57.3-128 128-128l128 0c70.7 0 128 57.3 128 128l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256zm256 0l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
    </Icon>
);

export default JugBottle;