
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=duotone triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNi4yNzQgNDE3LjAwMUM1MjIuNjA2IDQ0NS4wMDEgNTAyLjA1MiA0ODAuMDAxIDQ2OS4yNzUgNDgwLjAwMUg0Mi43MzlDOS44NTIgNDgwLjAwMSAtMTAuNTkyIDQ0NC44OTEgNS43NDEgNDE3LjAwMUwyMTguOTU0IDUzLjAwMUMyMzUuMzk3IDI1LjAwMSAyNzYuNjE3IDI1LjAwMSAyOTIuOTUgNTMuMDAxTDUwNi4yNzQgNDE3LjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M506.274 417.001C522.606 445.001 502.052 480.001 469.275 480.001H42.739C9.852 480.001 -10.592 444.891 5.741 417.001L218.954 53.001C235.397 25.001 276.617 25.001 292.95 53.001L506.274 417.001Z" />
    </Icon>
);

export default Triangle;