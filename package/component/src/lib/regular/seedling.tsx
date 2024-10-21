
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=regular seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M307.3 207c82.9-9.1 148.4-75.6 156-159L456 48c-76.7 0-142 49.1-166.1 117.5c-8.8-16.8-19.4-32.6-31.6-47.1C296.1 48 370.5 0 456 0l24 0c17.7 0 32 14.3 32 32c0 113.6-84.6 207.4-194.2 222c-2.1-16.2-5.6-31.9-10.5-47.1zM48 112l0 16c0 97.2 78.8 176 176 176l8 0 0-16c0 0 0 0 0 0c0-97.2-78.8-176-176-176l-8 0zM280 288l0 16 0 48 0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-8 0C100.3 352 0 251.7 0 128L0 96C0 78.3 14.3 64 32 64l24 0c123.7 0 224 100.3 224 224z" />
    </Icon>
);

export default Seedling;