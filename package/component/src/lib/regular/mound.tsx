
import { Icon } from "../../index";

/**
 * A component that renders the `mound` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=regular mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M485 368L91 368l94.8-164.9c21-36.6 60-59.1 102.2-59.1s81.2 22.6 102.2 59.1L485 368zM288 96c-59.4 0-114.2 31.7-143.9 83.2L35.6 368c-12.3 21.3 3.1 48 27.7 48l449.4 0c24.6 0 40-26.6 27.7-48L431.9 179.2C402.2 127.7 347.4 96 288 96z" />
    </Icon>
);

export default Mound;