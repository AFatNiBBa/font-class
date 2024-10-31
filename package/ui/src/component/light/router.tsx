
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=light router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 32c62.9 0 120.4 22.6 165 60.2c6.8 5.7 16.8 4.8 22.5-1.9s4.8-16.8-1.9-22.5C487.5 25.5 422.7 0 352 0S216.5 25.5 166.4 67.8c-6.8 5.7-7.6 15.8-1.9 22.5s15.8 7.6 22.5 1.9C231.6 54.6 289.1 32 352 32zm16 208c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80L64 320c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-144 0 0-80zM64 352l448 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm40 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm42.2-251.4C277.9 141.7 313.3 128 352 128s74.1 13.7 101.8 36.6c6.8 5.6 16.9 4.7 22.5-2.1s4.7-16.9-2.1-22.5C441 112.5 398.4 96 352 96s-89 16.5-122.2 43.9c-6.8 5.6-7.8 15.7-2.1 22.5s15.7 7.8 22.5 2.1z" />
    </Icon>
);

export default Router;