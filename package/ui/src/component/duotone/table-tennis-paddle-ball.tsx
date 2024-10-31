
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-tennis-paddle-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tennis-paddle-ball?s=duotone table-tennis-paddle-ball}
 * @preview ![table-tennis-paddle-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table-tennis-paddle-ball.svg)
 */
const TableTennisPaddleBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M301.4 358.8c21-42 64.4-70.8 114.6-70.8c29 0 55.8 9.6 77.2 25.9c35.9-82 20.3-181.2-46.8-248.3c-87.5-87.5-229.3-87.5-316.8 0L69.5 125.7l-.6 .6L301.4 358.8zm-11.3 33.9L49.3 151.9C38.1 171.3 32 193.5 32 216.2l0 2.7c0 33.9 13.5 66.5 37.5 90.5l9.8 9.8c13.1 13.1 12.4 34.6-1.7 46.8L11 423.8C4.3 429.6 .3 438 0 446.9s3.1 17.5 9.4 23.8l32 32c6.3 6.3 14.9 9.7 23.8 9.4s17.2-4.3 23-11l57.7-66.6c12.2-14 33.7-14.8 46.8-1.7l9.8 9.8c24 24 56.6 37.5 90.5 37.5l2.7 0c3.1 0 6.1-.1 9.2-.3C294.2 460.9 288 439.2 288 416c0-7.9 .7-15.7 2.1-23.3z" />
    </Icon>
);

export default TableTennisPaddleBall;