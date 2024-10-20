
import { Icon } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=sharp-solid sprinkler}
 * @preview ![sprinkler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sprinkler.svg)
 */
const Sprinkler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0a24 24 0 1 1 0 48A24 24 0 1 1 24 0zM0 128a24 24 0 1 1 48 0A24 24 0 1 1 0 128zM0 232a24 24 0 1 1 48 0A24 24 0 1 1 0 232zM64 72a24 24 0 1 1 48 0A24 24 0 1 1 64 72zm24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm360 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm24-80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM488 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM448 72a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-40-32a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM288 64l0 32 0 160 128 0 0 40-96 88 0 128-128 0 0-128L96 296l0-40 128 0 0-160 0-32 64 0z" />
    </Icon>
);

export default Sprinkler;