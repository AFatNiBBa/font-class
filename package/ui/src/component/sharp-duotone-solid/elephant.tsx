
import { Icon, generic } from "../../index";

/**
 * A component that renders the `elephant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elephant?s=sharp-duotone-solid elephant}
 * @preview ![elephant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/elephant.svg)
 */
const Elephant: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.1 358.3l43.9 19.5L64 337.1 64 512l128 0 0-102c15.3 3.9 31.4 6 48 6s32.7-2.1 48-6l0 102 128 0 0-171.3c-9.1-10.3-16.6-22.1-22-35c9.8-4.1 19.7-8.3 29.5-12.4C438.1 327.8 472.2 352 512 352c1.4 0 2.8 0 4.2-.1s2.8-.1 4.1-.3c2.7-.2 5.5-.6 8.1-1c5.3-.9 10.5-2.3 15.5-4.1l0-10.5 0-144c0-88.4-71.6-160-160-160l-1.6 0C362.2 12.2 334.5 0 304 0L192 0l0 38 0 74c0 61.9 50.1 112 112 112l16 0 0 32-16 0c-79.5 0-144-64.5-144-144l0-62.6c-13.6 6.3-26.4 14.1-38.1 23.2C67.4 111.8 32 175.8 32 248l0 42.9L2.1 358.3zM480 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 172l0 21.5c0 43.3 35.1 78.5 78.5 78.5c33.8 0 63.8-21.6 74.5-53.7l5.4-16.2-60.7-20.2-5.4 16.2c-2 5.9-7.5 9.9-13.7 9.9c-8 0-14.5-6.5-14.5-14.5l0-21.5c-10.2 2.6-21 4-32 4c-1.4 0-2.8 0-4.1-.1s-2.7-.1-4.1-.2c-2.7-.2-5.4-.4-8.1-.8c-5.3-.7-10.6-1.7-15.7-3zm105.1-18.9c3.3-2.3 6.5-4.7 9.5-7.3c1.5-1.3 3-2.6 4.5-4c.7-.7 1.5-1.4 2.2-2.1c.7-.7 1.4-1.4 2.1-2.1c-5.6 5.7-11.7 10.9-18.3 15.5z" />
        <path d="M464 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48 128c-39.8 0-73.9-24.2-88.5-58.7L394 305.7c19.4 46 64.9 78.3 118 78.3c35.8 0 68.2-14.7 91.4-38.4l11.2-11.4-22.9-22.4-11.2 11.4C563.1 341 538.9 352 512 352z" />
    </Icon>
);

export default Elephant;