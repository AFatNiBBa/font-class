
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=thin compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm336 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm80 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM88 256c0 4.4-3.6 8-8 8s-8-3.6-8-8C72 154.4 154.4 72 256 72c4.4 0 8 3.6 8 8s-3.6 8-8 8C163.2 88 88 163.2 88 256z" />
    </Icon>
);

export default CompactDisc;