
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=light thermometer}
 * @preview ![thermometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzYuNzM4IDIwLjM1NEM0NjAuMDI3IDYuNjk5IDQzOS4yNDYgMCA0MTguMTIxIDBDMzkxLjg0NiAwLjAwMiAzNjUuMDM3IDEwLjM2NyAzNDQuODc1IDMwLjYwN0wxMTQuNjEzIDI2Mi40NzlDMTAyLjcwNSAyNzQuNDcxIDk2LjAyMyAyOTAuNjg2IDk2LjAyMyAzMDcuNTg0TDk2LjAwNiAzOTMuMzY5TDQuNjg4IDQ4NC42ODdDLTEuNTYzIDQ5MC45MzcgLTEuNTYzIDUwMS4wNjIgNC42ODggNTA3LjMxMkM3LjgxMiA1MTAuNDM4IDExLjkwNiA1MTIgMTYgNTEyUzI0LjE4NyA1MTAuNDM4IDI3LjMxMiA1MDcuMzEyTDExOC42MjUgNDE2SDIwMy4zMThDMjIwLjI1MiA0MTYgMjM2LjQ5NiA0MDkuMjg3IDI0OC40OTIgMzk3LjMzNEw0ODMuOTg2IDE2Mi42NTZDNTE4Ljg1OSAxMjcuNzY4IDUyNi4yMzIgNjEuMTE3IDQ3Ni43MzggMjAuMzU0Wk00NjEuMzk4IDEzOS45OUwyMjUuOTA0IDM3NC42NjZDMjE5Ljg2NSAzODAuNjg2IDIxMS44NDQgMzg0IDIwMy4zMTggMzg0SDEyOC4wMDhMMTI4LjAyMyAzMDcuNTg0QzEyOC4wMjMgMjk5LjA3NiAxMzEuMzI0IDI5MS4wNjQgMTM3LjMyIDI4NS4wMjdMMTY3Ljc1NiAyNTQuMzgxTDE5Ni42ODcgMjgzLjMxM0MxOTkuODEyIDI4Ni40MzggMjAzLjkwNiAyODggMjA4IDI4OFMyMTYuMTg4IDI4Ni40MzggMjE5LjMxMiAyODMuMzEyQzIyNS41NjIgMjc3LjA2MiAyMjUuNTYyIDI2Ni45MzcgMjE5LjMxMiAyNjAuNjg4TDE5MC4zMDEgMjMxLjY3NkwyMzEuNTMxIDE5MC4xNTZMMjYwLjY4NyAyMTkuMzEyQzI2My44MTIgMjIyLjQzOCAyNjcuOTA2IDIyNCAyNzIgMjI0UzI4MC4xODggMjIyLjQzOCAyODMuMzEyIDIxOS4zMTJDMjg5LjU2MiAyMTMuMDYyIDI4OS41NjIgMjAyLjkzNyAyODMuMzEyIDE5Ni42ODhMMjU0LjA3OCAxNjcuNDUzTDI5NS4zMDkgMTI1LjkzNEwzMjQuNjg3IDE1NS4zMTJDMzI3LjgxMiAxNTguNDM4IDMzMS45MDYgMTYwIDMzNiAxNjBTMzQ0LjE4OCAxNTguNDM4IDM0Ny4zMTIgMTU1LjMxMkMzNTMuNTYyIDE0OS4wNjIgMzUzLjU2MiAxMzguOTM3IDM0Ny4zMTIgMTMyLjY4OEwzMTcuODU1IDEwMy4yM0wzNjcuNTQ3IDUzLjE5MUMzODAuOTYxIDM5LjcyNSAzOTkuMzkzIDMyLjAwMiA0MTguMTIzIDMyQzQzMi43MDkgMzIgNDQ1Ljk3NSAzNi41NDEgNDU2LjM5NSA0NS4wNTVDNDc0Ljc1NiA2MC4xNzggNDc5LjMyNiA3OC4xMzMgNDc5LjkyNiA5MC41MzNDNDgwLjgwNSAxMDguNzI3IDQ3My42ODkgMTI3LjY5MyA0NjEuMzk4IDEzOS45OVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M476.738 20.354C460.027 6.699 439.246 0 418.121 0C391.846 0.002 365.037 10.367 344.875 30.607L114.613 262.479C102.705 274.471 96.023 290.686 96.023 307.584L96.006 393.369L4.688 484.687C-1.563 490.937 -1.563 501.062 4.688 507.312C7.812 510.438 11.906 512 16 512S24.187 510.438 27.312 507.312L118.625 416H203.318C220.252 416 236.496 409.287 248.492 397.334L483.986 162.656C518.859 127.768 526.232 61.117 476.738 20.354ZM461.398 139.99L225.904 374.666C219.865 380.686 211.844 384 203.318 384H128.008L128.023 307.584C128.023 299.076 131.324 291.064 137.32 285.027L167.756 254.381L196.687 283.313C199.812 286.438 203.906 288 208 288S216.188 286.438 219.312 283.312C225.562 277.062 225.562 266.937 219.312 260.688L190.301 231.676L231.531 190.156L260.687 219.312C263.812 222.438 267.906 224 272 224S280.188 222.438 283.312 219.312C289.562 213.062 289.562 202.937 283.312 196.688L254.078 167.453L295.309 125.934L324.687 155.312C327.812 158.438 331.906 160 336 160S344.188 158.438 347.312 155.312C353.562 149.062 353.562 138.937 347.312 132.688L317.855 103.23L367.547 53.191C380.961 39.725 399.393 32.002 418.123 32C432.709 32 445.975 36.541 456.395 45.055C474.756 60.178 479.326 78.133 479.926 90.533C480.805 108.727 473.689 127.693 461.398 139.99Z" />
    </Icon>
);

export default Thermometer;