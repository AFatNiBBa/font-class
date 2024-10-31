
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=thin acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M261.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L241 11.7C226.9 25.8 218.2 44.3 216.4 64L96 64C43 64 0 107 0 160l0 16c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-16c0-53-43-96-96-96L232.5 64c1.8-15.4 8.7-29.9 19.8-41l9.4-9.4zM352 80c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16L32 192c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l256 0zM48.4 240c4.1 78.1 39 189.3 165.5 236.4c6.5 2.4 13.7 2.4 20.2 0C360.6 429.3 395.5 318.1 399.6 240l-16 0c-4 74.5-37.4 177.6-155.1 221.4c-2.9 1.1-6.1 1.1-9 0C101.8 417.5 68.5 314.5 64.4 240l-16 0z" />
    </Icon>
);

export default Acorn;