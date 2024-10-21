
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-headphones` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-headphones?s=duotone head-side-headphones}
 * @preview ![head-side-headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/head-side-headphones.svg)
 */
const HeadSideHeadphones: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224.2c0 49.9 16.6 98.2 46.9 137.3C57.1 374.8 64 390.6 64 407.3L64 480c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-32 64 0c35.3 0 64-28.7 64-64l0-64 20.2 0c24.2 0 43.8-19.6 43.8-43.8c0-10-3.4-19.6-9.6-27.4l-42-52.6c-8.3-10.3-12.8-23-15.1-36C429.6 71.8 348 3.9 256 .2L256 64l0 22.6c0 12.4 7.4 23.3 17.4 30.5C301.6 137.4 320 170.6 320 208c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-37.5 18.4-70.6 46.6-90.9c10-7.2 17.4-18.2 17.4-30.5L160 64l0-54.7C67.4 36.9 0 122.8 0 224.2z" />
        <path d="M256 64L256 .2c-2.7-.1-5.3-.2-8-.2L224 0c-22.2 0-43.7 3.2-64 9.3L160 64l0 22.6c0 12.4-7.4 23.3-17.4 30.5C114.4 137.4 96 170.6 96 208c0 61.9 50.1 112 112 112s112-50.1 112-112c0-37.4-18.4-70.6-46.6-90.9c-10-7.2-17.4-18.2-17.4-30.5L256 64zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm96 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default HeadSideHeadphones;