
import { Icon } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=sharp-thin broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M357.7 165.7L416 224 248.6 498 240 512l-11.6-11.6L11.6 283.6 0 272l14-8.6L288 96l58.3 58.3 152-152 11.3 11.3-152 152zM25.7 275.1l68 68 52.7-52.7 5.7-5.7L163.3 296l-5.7 5.7L105 354.3l132 132L339.4 318.7 193.3 172.6 25.7 275.1zM348 304.6l47.8-78.2L285.6 116.2 207.4 164 348 304.6z" />
    </Icon>
);

export default BroomWide;