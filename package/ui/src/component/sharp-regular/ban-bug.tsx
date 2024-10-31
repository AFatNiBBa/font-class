
import { Icon } from "../../index";

/**
 * A component that renders the `ban-bug` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=sharp-regular ban-bug}
 * @preview ![ban-bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ban-bug.svg)
 */
const BanBug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464C141.1 464 48 370.9 48 256c0-48.8 16.8-93.7 44.9-129.1L385.1 419.1C349.7 447.2 304.8 464 256 464zm80-161.9l0-4.1 28.9 5.8 15.7 3.1 6.3-31.4-15.7-3.1-35.1-7 0-18.6 35.1-7 15.7-3.1-6.3-31.4-15.7 3.1L336 214.1l0-30.6 16.2-9.7 13.7-8.2L349.5 138l-13.7 8.2-18.4 11.1L288 128l-64 0-31 31L126.9 92.9C162.3 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208c0 48.8-16.8 93.7-44.9 129.1L336 302.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM140.9 272.3l-15.7 3.1 6.3 31.4 15.7-3.1 28.9-5.8 0 30.6-16.2 9.7L146 346.5 162.5 374l13.7-8.2 18.4-11.1L224 384l64 0 2.7-2.7L175 265.5l-34.1 6.8z" />
    </Icon>
);

export default BanBug;