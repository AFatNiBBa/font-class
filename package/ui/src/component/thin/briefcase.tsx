
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=thin briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 40l0 56 224 0 0-56c0-13.3-10.7-24-24-24L168 16c-13.3 0-24 10.7-24 24zM128 96l0-56c0-22.1 17.9-40 40-40L344 0c22.1 0 40 17.9 40 40l0 56 64 0c35.3 0 64 28.7 64 64l0 104 0 152c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 264 0 160c0-35.3 28.7-64 64-64l64 0zM16 272l0 144c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-144-160 0 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-48L16 272zm160-16l16 0 128 0 16 0 160 0 0-96c0-26.5-21.5-48-48-48l-72 0-240 0-72 0c-26.5 0-48 21.5-48 48l0 96 160 0zm16 16l0 48c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-48-128 0z" />
    </Icon>
);

export default Briefcase;