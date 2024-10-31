
import { Icon } from "../../index";

/**
 * A component that renders the `bold` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bold?s=sharp-regular bold}
 * @preview ![bold](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bold.svg)
 */
const Bold: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l24 0 24 0 24 0 16 0 24 0 100 0c68.5 0 124 55.5 124 124c0 34.7-14.3 66.2-37.3 88.7C339.7 264.9 368 307.1 368 356c0 68.5-55.5 124-124 124l-132 0-24 0-16 0-24 0-24 0L0 480l0-48 24 0 24 0 0-176L48 80 24 80 0 80 0 32zM96 432l16 0 132 0c42 0 76-34 76-76s-34-76-76-76l-32 0L96 280l0 152zm0-200l116 0c42 0 76-34 76-76s-34-76-76-76L112 80 96 80l0 152z" />
    </Icon>
);

export default Bold;