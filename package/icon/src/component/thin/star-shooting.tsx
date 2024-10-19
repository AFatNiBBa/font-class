
import { Icon } from "../../index";

/**
 * A component that renders the `star-shooting` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-shooting?s=thin star-shooting}
 * @preview ![star-shooting](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjQuMjAzIDI2Ny4yNzRMMjU5LjQ3MSAyNTIuMDI0TDIxMi42MDMgMTU2Ljc3OEMyMDguNDEgMTQ4LjI2MiAyMDAuMjAxIDE0My45ODEgMTkxLjk4NCAxNDMuOTgxQzE4My43OTcgMTQzLjk4MSAxNzUuNjAzIDE0OC4yMjkgMTcxLjM2MSAxNTYuNzc4TDEyNC40OTQgMjUyLjAyNEwxOS43NjQgMjY3LjI3NEMwLjg5MSAyNzAuMDIyIC02LjczMiAyOTMuMjcyIDcuMDE2IDMwNi41MjJMODIuODc3IDM4MC41MThMNjQuODgxIDQ4NS4xMzlDNjIuNDE0IDUwMC4wNCA3NC4yODEgNTExLjk4MSA4Ny41NjQgNTExLjk4MUM5MS4xMDcgNTExLjk4MSA5NC43NSA1MTEuMTMzIDk4LjI1IDUwOS4yNjRMMTkxLjk4MiA0NTkuODkxTDI4NS43MTcgNTA5LjI2NEMyODkuMDY4IDUxMS4wNDggMjkyLjcyNiA1MTEuOTIxIDI5Ni4zNzMgNTExLjkyMUMzMDEuMTU2IDUxMS45MjEgMzA1LjkyIDUxMC40MjEgMzA5Ljk2MyA1MDcuNTE0QzMxNi45NjEgNTAyLjM4OSAzMjAuNTg2IDQ5My42MzkgMzE5LjA4NiA0ODUuMTM5TDMwMS4yMTUgMzgwLjUxOEwzNzcuMDc2IDMwNi41MjJDMzkwLjY5OSAyOTMuMjcyIDM4My4wNzQgMjcwLjAyMiAzNjQuMjAzIDI2Ny4yNzRaTTM2NS45MDQgMjk1LjA2OUwyOTAuMDQzIDM2OS4wNjVMMjg0LjAyNyAzNzQuOTMyTDI4NS40NDMgMzgzLjIxNEwzMDMuMzI4IDQ4Ny45MjFDMzAzLjc2MiA0OTAuMzY4IDMwMi42MjkgNDkzLjA1MyAzMDAuNjE5IDQ5NC41MjZDMjk5LjM1IDQ5NS40MzggMjk3Ljg4MyA0OTUuOTIxIDI5Ni4zNzMgNDk1LjkyMUMyOTUuMjY0IDQ5NS45MjEgMjk0LjIwNyA0OTUuNjU3IDI5My4xNzQgNDk1LjEwOEwxOTkuNDM5IDQ0NS43MzVMMTkxLjk4MiA0NDEuODA3TDE4NC41MjcgNDQ1LjczNUw5MC43MTMgNDk1LjE0OUM4OS42NjYgNDk1LjcxIDg4LjYzNSA0OTUuOTgxIDg3LjU2NCA0OTUuOTgxQzg1LjU1OSA0OTUuOTgxIDgzLjUzMyA0OTUuMDA1IDgyLjE0NiA0OTMuMzdDODAuODA3IDQ5MS43OTIgODAuMzA5IDQ4OS45MDMgODAuNjQ4IDQ4Ny44NTJMOTguNjQ2IDM4My4yMzFMMTAwLjA3MiAzNzQuOTRMOTQuMDQ5IDM2OS4wNjVMMTguMTE5IDI5NS4wMDFDMTUuNDQzIDI5Mi40MjMgMTUuODY5IDI4OS40NzUgMTYuMzU5IDI4Ny45NDhDMTYuNzY4IDI4Ni42ODIgMTguMTM3IDI4My42NzggMjIuMDY4IDI4My4xMDZMMTI2LjgwMSAyNjcuODU2TDEzNS4xMzMgMjY2LjY0M0wxMzguODUxIDI1OS4wODlMMTg1LjY5MyAxNjMuODg5QzE4Ny4zODMgMTYwLjQ4OSAxOTAuMzU5IDE1OS45ODEgMTkxLjk4NCAxNTkuOTgxQzE5My4yOTcgMTU5Ljk4MSAxOTYuNTMxIDE2MC4zNTggMTk4LjI0OCAxNjMuODRMMjQ1LjExNSAyNTkuMDg5TDI0OC44MzQgMjY2LjY0M0wyNTcuMTY2IDI2Ny44NTZMMzYxLjg5NiAyODMuMTA2QzM2NS44MzQgMjgzLjY4IDM2Ny4yMTcgMjg2LjcgMzY3LjYyOSAyODcuOTcxQzM2OC4xMjkgMjg5LjUxIDM2OC41NyAyOTIuNDc1IDM2NS45MDQgMjk1LjA2OVpNMjMyIDk1Ljk4MUMyMzQuMDQ3IDk1Ljk4MSAyMzYuMDk0IDk1LjIgMjM3LjY1NiA5My42MzdMMzE3LjY1NiAxMy42MzdDMzIwLjc4MSAxMC41MTIgMzIwLjc4MSA1LjQ1IDMxNy42NTYgMi4zMjVTMzA5LjQ2OSAtMC44IDMwNi4zNDQgMi4zMjVMMjI2LjM0NCA4Mi4zMjVDMjIzLjIxOSA4NS40NSAyMjMuMjE5IDkwLjUxMiAyMjYuMzQ0IDkzLjYzN0MyMjcuOTA2IDk1LjIgMjI5Ljk1MyA5NS45ODEgMjMyIDk1Ljk4MVpNNDk4LjM0NCAxOTQuMzI1TDQxOC4zNDQgMjc0LjMyNUM0MTUuMjE5IDI3Ny40NSA0MTUuMjE5IDI4Mi41MTIgNDE4LjM0NCAyODUuNjM3QzQxOS45MDYgMjg3LjIgNDIxLjk1MyAyODcuOTgxIDQyNCAyODcuOTgxUzQyOC4wOTQgMjg3LjIgNDI5LjY1NiAyODUuNjM3TDUwOS42NTYgMjA1LjYzN0M1MTIuNzgxIDIwMi41MTIgNTEyLjc4MSAxOTcuNDUgNTA5LjY1NiAxOTQuMzI1UzUwMS40NjkgMTkxLjIgNDk4LjM0NCAxOTQuMzI1Wk0zMjIuMzQ0IDE4OS42MzdDMzIzLjkwNiAxOTEuMiAzMjUuOTUzIDE5MS45ODEgMzI4IDE5MS45ODFTMzMyLjA5NCAxOTEuMiAzMzMuNjU2IDE4OS42MzdMNTA5LjY1NiAxMy42MzdDNTEyLjc4MSAxMC41MTIgNTEyLjc4MSA1LjQ1IDUwOS42NTYgMi4zMjVTNTAxLjQ2OSAtMC44IDQ5OC4zNDQgMi4zMjVMMzIyLjM0NCAxNzguMzI1QzMxOS4yMTkgMTgxLjQ1IDMxOS4yMTkgMTg2LjUxMiAzMjIuMzQ0IDE4OS42MzdaIi8+PC9zdmc+|width=32|height=32)
 */
const StarShooting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M364.203 267.274L259.471 252.024L212.603 156.778C208.41 148.262 200.201 143.981 191.984 143.981C183.797 143.981 175.603 148.229 171.361 156.778L124.494 252.024L19.764 267.274C0.891 270.022 -6.732 293.272 7.016 306.522L82.877 380.518L64.881 485.139C62.414 500.04 74.281 511.981 87.564 511.981C91.107 511.981 94.75 511.133 98.25 509.264L191.982 459.891L285.717 509.264C289.068 511.048 292.726 511.921 296.373 511.921C301.156 511.921 305.92 510.421 309.963 507.514C316.961 502.389 320.586 493.639 319.086 485.139L301.215 380.518L377.076 306.522C390.699 293.272 383.074 270.022 364.203 267.274ZM365.904 295.069L290.043 369.065L284.027 374.932L285.443 383.214L303.328 487.921C303.762 490.368 302.629 493.053 300.619 494.526C299.35 495.438 297.883 495.921 296.373 495.921C295.264 495.921 294.207 495.657 293.174 495.108L199.439 445.735L191.982 441.807L184.527 445.735L90.713 495.149C89.666 495.71 88.635 495.981 87.564 495.981C85.559 495.981 83.533 495.005 82.146 493.37C80.807 491.792 80.309 489.903 80.648 487.852L98.646 383.231L100.072 374.94L94.049 369.065L18.119 295.001C15.443 292.423 15.869 289.475 16.359 287.948C16.768 286.682 18.137 283.678 22.068 283.106L126.801 267.856L135.133 266.643L138.851 259.089L185.693 163.889C187.383 160.489 190.359 159.981 191.984 159.981C193.297 159.981 196.531 160.358 198.248 163.84L245.115 259.089L248.834 266.643L257.166 267.856L361.896 283.106C365.834 283.68 367.217 286.7 367.629 287.971C368.129 289.51 368.57 292.475 365.904 295.069ZM232 95.981C234.047 95.981 236.094 95.2 237.656 93.637L317.656 13.637C320.781 10.512 320.781 5.45 317.656 2.325S309.469 -0.8 306.344 2.325L226.344 82.325C223.219 85.45 223.219 90.512 226.344 93.637C227.906 95.2 229.953 95.981 232 95.981ZM498.344 194.325L418.344 274.325C415.219 277.45 415.219 282.512 418.344 285.637C419.906 287.2 421.953 287.981 424 287.981S428.094 287.2 429.656 285.637L509.656 205.637C512.781 202.512 512.781 197.45 509.656 194.325S501.469 191.2 498.344 194.325ZM322.344 189.637C323.906 191.2 325.953 191.981 328 191.981S332.094 191.2 333.656 189.637L509.656 13.637C512.781 10.512 512.781 5.45 509.656 2.325S501.469 -0.8 498.344 2.325L322.344 178.325C319.219 181.45 319.219 186.512 322.344 189.637Z" />
    </Icon>
);

export default StarShooting;