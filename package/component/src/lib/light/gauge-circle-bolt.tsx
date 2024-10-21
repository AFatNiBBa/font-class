
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-circle-bolt` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-bolt?s=light gauge-circle-bolt}
 * @preview ![gauge-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gauge-circle-bolt.svg)
 */
const GaugeCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 480c32.2 0 62.8-6.8 90.5-19c5.8 9.3 12.5 18.1 19.8 26.1C333 503 295.5 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C375.4 0 475.6 81.7 504 192.2c-2.6-.1-5.3-.2-8-.2c-8.4 0-16.7 .6-24.8 1.7C444.3 100.3 358.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-194c0-8.8 7.2-16 16-16s16 7.2 16 16l0 194c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64zM144 120a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM72 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM344 144a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM608 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm191.9-81c4.3 3.7 5.4 9.9 2.6 14.9L516.4 356l35.6 0c5.2 0 9.8 3.3 11.4 8.2s-.1 10.3-4.2 13.4l-96 72c-4.5 3.4-10.8 3.2-15.1-.6s-5.4-9.9-2.6-14.9L475.6 380 440 380c-5.2 0-9.8-3.3-11.4-8.2s.1-10.3 4.2-13.4l96-72c4.5-3.4 10.8-3.2 15.1 .6z" />
    </Icon>
);

export default GaugeCircleBolt;