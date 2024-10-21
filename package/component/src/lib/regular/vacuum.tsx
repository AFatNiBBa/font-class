
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=regular vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M290 48c-27.1 0-50.6 19-56.2 45.5L206 224l-49.1 0L186.8 83.5C197.2 34.8 240.2 0 290 0L528 0c61.9 0 112 50.1 112 112c0 44.8-26.3 83.5-64.3 101.4C596.1 243.9 608 280.5 608 320l0 128c0 35.3-28.7 64-64 64l-75.3 0c14.8-13 26.5-29.4 34-48l41.3 0c8.8 0 16-7.2 16-16l0-128c0-79.5-64.5-144-144-144c-8.8 0-16 7.2-16 16l0 97c-5.2-.7-10.6-1-16-1c-11 0-21.8 1.4-32 4l0-100c0-35.3 28.7-64 64-64c47.9 0 91.8 17.6 125.4 46.6c28.9-6.1 50.6-31.9 50.6-62.6c0-35.3-28.7-64-64-64L290 48zM150.1 256l49.1 0L171.7 385.1c29.8 5.5 52.3 31.6 52.3 62.9c0 35.3-28.7 64-64 64L32 512c-17.7 0-32-14.3-32-32c0-53 43-96 96-96l26.9 0 27.2-128zM432 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM176 448c0-8.8-7.2-16-16-16l-64 0c-20.9 0-38.7 13.4-45.3 32L160 464c8.8 0 16-7.2 16-16zm208-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Vacuum;