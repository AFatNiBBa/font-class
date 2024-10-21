
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=regular unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128c0-44.2 35.8-80 80-80c35.6 0 65.8 23.2 76.1 55.4c4.1 12.6 17.6 19.5 30.2 15.5s19.5-17.6 15.5-30.2C329.2 37.2 281 0 224 0C153.3 0 96 57.3 96 128l0 64-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-64zM48 256c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-192z" />
    </Icon>
);

export default Unlock;