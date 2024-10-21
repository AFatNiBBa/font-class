
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=regular briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 64 0c35.3 0 64 28.7 64 64l0 120 0 136c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 280 0 160c0-35.3 28.7-64 64-64l64 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-144 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16L48 304zm144-48l128 0 144 0 0-96c0-8.8-7.2-16-16-16l-88 0-208 0-88 0c-8.8 0-16 7.2-16 16l0 96 144 0z" />
    </Icon>
);

export default Briefcase;