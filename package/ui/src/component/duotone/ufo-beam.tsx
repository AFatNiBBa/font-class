
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ufo-beam` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ufo-beam?s=duotone ufo-beam}
 * @preview ![ufo-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ufo-beam.svg)
 */
const UfoBeam: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M2.3 477.7l89-187.9c14.2 5.2 29.9 9.8 46.6 13.8L45.7 498.3C41.6 506.9 33 512 24 512c-3.4 0-6.9-.7-10.3-2.3c-12-5.7-17.1-20-11.4-32zM144 138.7c0-9.3 1-18.8 2.9-28.3C158.5 54.5 204.4 0 288 0s129.5 54.5 141.1 110.3c2 9.5 2.9 19 2.9 28.3c0 0-33.2 53.3-144 53.3s-144-53.3-144-53.3zM438.1 303.6c16.7-4 32.3-8.6 46.6-13.8l89 187.9c1.6 3.3 2.3 6.8 2.3 10.3c0 9-5.1 17.6-13.7 21.7c-3.3 1.6-6.8 2.3-10.3 2.3c-9 0-17.6-5.1-21.7-13.7L438.1 303.6z" />
        <path d="M288 192c110.8 0 144-53.3 144-53.3c0-9.3-1-18.8-2.9-28.3C516.8 129.5 576 166.1 576 208c0 61.9-128.9 112-288 112S0 269.9 0 208c0-41.9 59.2-78.5 146.9-97.7c-2 9.5-2.9 19-2.9 28.3c0 0 33.2 53.3 144 53.3zM120 208a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM312 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default UfoBeam;