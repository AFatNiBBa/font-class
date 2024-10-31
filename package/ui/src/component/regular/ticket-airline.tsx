
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-airline` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-airline?s=regular ticket-airline}
 * @preview ![ticket-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ticket-airline.svg)
 */
const TicketAirline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l512 0c8.8 0 16-7.2 16-16l0-35c-41.4-10.7-72-48.2-72-93s30.6-82.3 72-93l0-35c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 61.3c0 11.2-12.8 18.7-24 18.7c-26.5 0-48 21.5-48 48s21.5 48 48 48c11.2 0 24 7.5 24 18.7l0 61.3c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm432 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-16 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM186.7 224l-23.2-69.5c-1.7-5.2 2.1-10.5 7.6-10.5l31.1 0c8.5 0 16.4 4.5 20.7 11.9L262.7 224l40.3 0c16.1 0 31.5 6.4 42.8 17.7c7.9 7.9 7.9 20.7 0 28.5C334.4 281.6 319 288 302.9 288l-40.3 0-39.7 68.1c-4.3 7.4-12.2 11.9-20.7 11.9l-31.1 0c-5.5 0-9.3-5.4-7.6-10.5L186.7 288 144 288l-19.2 25.6c-3 4-7.8 6.4-12.8 6.4l-13.8 0c-5.2 0-9-4.9-7.8-9.9L103 259.9c.6-2.5 .6-5.2 0-7.8L90.5 201.9c-1.3-5 2.6-9.9 7.8-9.9l13.8 0c5 0 9.8 2.4 12.8 6.4L144 224l42.7 0z" />
    </Icon>
);

export default TicketAirline;