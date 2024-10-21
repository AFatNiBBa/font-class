
import { Icon } from "../../index";

/**
 * A component that renders the `hippo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hippo?s=sharp-solid hippo}
 * @preview ![hippo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hippo.svg)
 */
const Hippo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 30.1l17 17 17.2 17.2c1.9-.1 3.9-.2 5.8-.2l32 0c11.2 0 21.9 2.3 31.6 6.5L543 55l17-17L593.9 72 577 89 564 101.9c7.6 12.2 12 26.7 12 42.1l0 17.6c36.5 7.4 64 39.7 64 78.4c0 26.2-12.6 49.4-32 64l0 48-64 0 0-32-64 0 0 32-64 0 0-33.6c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5l0-16-32 0 0 16c0 44.7 26.2 83.2 64 101.2l0 42.8 64 0 0 96-128 0 0-108c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12l0 108L64 480l0-150.9L45.9 369.7 2.1 350.3 32 282.9 32 264C32 156.3 117.1 68.5 223.8 64.2l.2-.2 8 0 24 0 32 0 109 36.3c3.8-5.9 8.4-11.2 13.6-15.8L407 81l-17-17L424 30.1zM480 232a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Hippo;