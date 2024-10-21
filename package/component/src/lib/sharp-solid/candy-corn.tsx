
import { Icon } from "../../index";

/**
 * A component that renders the `candy-corn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-corn?s=sharp-solid candy-corn}
 * @preview ![candy-corn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/candy-corn.svg)
 */
const CandyCorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128l0-96s32-32 160-32S640 32 640 32l0 96-1 2.2c-7-1.8-15.7-3.9-25.9-5.9c-30.9-6.2-76-12.3-133.1-12.3s-102.2 6.1-133.1 12.3c-10.2 2-18.8 4.1-25.9 5.9l-1-2.2zm286.9 27.7c7.2 1.4 13.5 2.9 19 4.2L512 416l-64 0L334.2 159.9c5.5-1.3 11.8-2.8 19-4.2c29.1-5.8 72-11.7 126.9-11.7s97.8 5.9 126.9 11.7zM446.9 256L480 330.4 513.1 256l-66.2 0zM66.7 400.9L0 334.2s0-44.4 88.9-133.3S222.2 112 222.2 112l66.7 66.7 .9 2.2c-6.2 3.6-13.6 8.2-22.1 13.9c-25.8 17.2-61.3 44.2-101 83.9s-66.7 75.2-83.9 101c-5.7 8.5-10.2 15.9-13.9 22.1l-2.2-.9zm218.4-180c6-4 11.4-7.4 16.1-10.2L400 467.6 355.6 512 98.7 413.2c2.9-4.7 6.3-10.1 10.2-16.1c16.1-24.2 41.9-58.1 80-96.2s72-63.8 96.2-80zM243.7 401.6l74.6 28.7-28.7-74.6-45.9 45.9z" />
    </Icon>
);

export default CandyCorn;