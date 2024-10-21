
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=thin envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 448 64a64 64 0 1 0 128 0zM512 384l0-224c-6.3 0-12.5-.6-18.5-1.8L291.2 321.4c-20.5 16.5-49.8 16.5-70.3 0L16 156.2 16 128c0-26.5 21.5-48 48-48l353.3 0c-.9-5.2-1.3-10.5-1.3-16L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zM16 176.7L210.8 333.8c26.4 21.3 64 21.3 90.4 0L496 176.7 496 384c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-207.3z" />
    </Icon>
);

export default EnvelopeDot;