
import { Icon, generic } from "../../index";

/**
 * A component that renders the `street-view` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/street-view?s=duotone street-view}
 * @preview ![street-view](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhDMjkxLjM3NSAxMjggMzIwIDk5LjM3NSAzMjAgNjRTMjkxLjM3NSAwIDI1NiAwUzE5MiAyOC42MjUgMTkyIDY0UzIyMC42MjUgMTI4IDI1NiAxMjhaTTM2OCAzNDMuOTMyVjM4OS42NDFDNDE5Ljk3NyAzOTUuMjUyIDQ2NCA0MDUuNjk3IDQ2NCA0MjRDNDY0IDQ1NS41NzYgMzMzLjI1MiA0NjQgMjU2IDQ2NEMxNzguNzUgNDY0IDQ4IDQ1NS41NzYgNDggNDI0QzQ4IDQwNC4yOTUgOTguNjg2IDM5NC40MjIgMTQ0IDM4OS41MVYzNDMuNzAzQzgzLjg1MiAzNTIuNDgyIDAgMzczLjc1NCAwIDQyNEMwIDQ5My40NjkgMTYwLjkyMiA1MTIgMjU2IDUxMlM1MTIgNDkzLjQ2OSA1MTIgNDI0QzUxMiAzNzguMzc1IDQ0Mi41ODQgMzU0Ljc4NSAzNjggMzQzLjkzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTkyIDMwNEwyMDQuNDk2IDQwMy45NjlDMjA2LjQ5OCA0MTkuOTgzIDIyMC4xMTEgNDMyIDIzNi4yNDkgNDMySDI3NS43NTFDMjkxLjg4OSA0MzIgMzA1LjUwMiA0MTkuOTgzIDMwNy41MDQgNDAzLjk2OUwzMjAgMzA0QzMzNy42NzQgMzA0IDM1MiAyODkuNjcyIDM1MiAyNzJWMjI0QzM1MiAxODguNjU0IDMyMy4zNDYgMTYwIDI4OCAxNjBIMjI0QzE4OC42NTQgMTYwIDE2MCAxODguNjU0IDE2MCAyMjRWMjcyQzE2MCAyODkuNjcyIDE3NC4zMjYgMzA0IDE5MiAzMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const StreetView: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 128C291.375 128 320 99.375 320 64S291.375 0 256 0S192 28.625 192 64S220.625 128 256 128ZM368 343.932V389.641C419.977 395.252 464 405.697 464 424C464 455.576 333.252 464 256 464C178.75 464 48 455.576 48 424C48 404.295 98.686 394.422 144 389.51V343.703C83.852 352.482 0 373.754 0 424C0 493.469 160.922 512 256 512S512 493.469 512 424C512 378.375 442.584 354.785 368 343.932Z" />
            <path d="M192 304L204.496 403.969C206.498 419.983 220.111 432 236.249 432H275.751C291.889 432 305.502 419.983 307.504 403.969L320 304C337.674 304 352 289.672 352 272V224C352 188.654 323.346 160 288 160H224C188.654 160 160 188.654 160 224V272C160 289.672 174.326 304 192 304Z" />
    </Icon>
);

export default StreetView;