
import { Icon } from "../../index";

/**
 * A component that renders the `bone-break` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bone-break?s=light bone-break}
 * @preview ![bone-break](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzguMjUxIDM1OC42MTlMMjA4LjU0NiAzNzcuNzVDMTc2LjgxMSAzODQuODM0IDE3My4zMjcgNDA0LjYzMyAxNzAuNDAxIDQzMi44NDhDMTY3Ljg1IDQ1NS4xNTYgMTUxLjIxOCA0NzMuMzYxIDEyOC44ODIgNDc4LjM0OEMxMDAuNTYzIDQ4NC42NjggNzIuNDQgNDY3LjI2NiA2Ni4zNzYgNDM5LjUwNEM2MS4zMzUgNDE2LjQzMiA2NC4xMzkgMzk3LjA0MyA4My40MjcgMzgxLjYwOUw4My4zOTkgMzgxLjQ4NkM5MS44MDIgMzc0LjgyMiA5NS40ODkgMzY0LjE2NiA5My4yMjUgMzUzLjgwMUM5MC45NjIgMzQzLjQzOCA4My4xNzcgMzM1LjM0IDcyLjc4IDMzMi44NzNMNzIuNzUzIDMzMi43NUM0OC44MzEgMzI2Ljk2MSAzOC4yMSAzMTAuNTY4IDMzLjE2OSAyODcuNDk2QzI3LjEwNCAyNTkuNzM2IDQ1LjM2NCAyMzEuOTggNzMuNjggMjI1LjY1OEM5Ni4wMTggMjIwLjY3NCAxMTguNjg4IDIzMC4xMDUgMTMwLjI5NiAyNDkuMjU0QzE0NC43MDQgMjczLjYgMTU2LjExIDI5MC4wNzQgMTg3Ljg0NiAyODIuOTkyTDI3My43NzYgMjYzLjgxMUMyODIuNDA1IDI2MS44ODUgMjg3Ljg1NiAyNTMuMjUyIDI4NS45NSAyNDQuNTMxQzI4NC4wNDYgMjM1LjgwOSAyNzUuNTA1IDIzMC4yOTkgMjY2Ljg3NiAyMzIuMjI1TDE4MC45NDYgMjUxLjQwNkMxNjkuNTk1IDI1My45MzkgMTY5LjggMjUzLjExNyAxNTcuNTk4IDIzMi40MkMxMzguOTQyIDIwMS41MTggMTAyLjQyMyAxODYuMTE3IDY2Ljc4MiAxOTQuMDcyQzIxLjEzMiAyMDQuMjY0IC03Ljk0MyAyNDkuMzEyIDEuOTIzIDI5NC40NzFDOC45NTYgMzI2LjY3NCAyNS4wNzMgMzUwLjYzOSA1Ny4wOTYgMzYxLjg2NUMzMi43MjcgMzg1LjY4IDI4LjA5MyA0MTQuMjc1IDM1LjEyOCA0NDYuNDc5QzQ0Ljk5MyA0OTEuNjM3IDkwLjEzMiA1MjAuMTIzIDEzNS43OCA1MDkuOTM0QzE3MS40MjMgNTAxLjk3OSAxOTguMTMgNDcyLjQ2NSAyMDIuMTc4IDQzNi40OTRDMjA0LjYyMiA0MTIuNTI3IDIwNC4wOTUgNDExLjg2OSAyMTUuNDQ2IDQwOS4zMzZMMjg1LjI5NCAzOTAuMTc0QzI5My45NzkgMzg4LjIzNCAyOTkuNDY2IDM3OS42NDEgMjk3LjU2NSAzNzAuOTQ1QzI5NS42NTUgMzYyLjE5NSAyODYuOTkzIDM1Ni42NjggMjc4LjI1MSAzNTguNjE5Wk01NzMuMjE4IDE5NC4wNzJDNTM3LjU3NSAxODYuMTE5IDUwMS4wNTcgMjAxLjUxNiA0ODIuNDAxIDIzMi40MkM0NzAuMTk4IDI1My4xMTkgNDcwLjQwMyAyNTMuOTM5IDQ1OS4wNTIgMjUxLjQwNkwzNzMuMTIyIDIzMi4yMjVDMzY0LjQ5MyAyMzAuMjk5IDM1NS45NTQgMjM1LjgwOSAzNTQuMDQ4IDI0NC41MjlDMzUyLjE0MyAyNTMuMjUyIDM1Ny41OTMgMjYxLjg4NSAzNjYuMjIxIDI2My44MTFMNDUyLjE1MSAyODIuOTkyQzQ4My44ODcgMjkwLjA3NiA0OTUuMjk2IDI3My42IDUwOS43MDIgMjQ5LjI1NEM1MjEuMzA5IDIzMC4xMDUgNTQzLjk3OSAyMjAuNjcyIDU2Ni4zMTcgMjI1LjY2QzU5NC42MzYgMjMxLjk4IDYxMi44OTMgMjU5LjczNiA2MDYuODI5IDI4Ny40OTZDNjAxLjc5IDMxMC41NyA1OTEuMTY3IDMyNi45NjEgNTY3LjI0NSAzMzIuNzVMNTY3LjIxOCAzMzIuODc1QzU1Ni44MjMgMzM1LjM0IDU0OS4wMzggMzQzLjQzNyA1NDYuNzcyIDM1My44MDFDNTQ0LjUwOSAzNjQuMTY0IDU0OC4xOTggMzc0LjgyNCA1NTYuNTk4IDM4MS40ODhMNTU2LjU3MSAzODEuNjA5QzU3NS44NTggMzk3LjA0MyA1NzguNjYzIDQxNi40MzIgNTczLjYyNCA0MzkuNTA0QzU2Ny41NTkgNDY3LjI2OCA1MzkuNDM0IDQ4NC42NjggNTExLjExOCA0NzguMzQ4QzQ4OC43OCA0NzMuMzYxIDQ3Mi4xNDcgNDU1LjE1NiA0NjkuNTk2IDQzMi44NUM0NjYuNjcxIDQwNC42MzMgNDYzLjE4OCAzODQuODM0IDQzMS40NTIgMzc3Ljc1TDM2MS43NDcgMzU4LjYxOUMzNTMuMDA3IDM1Ni42NjggMzQ0LjM0NSAzNjIuMTk1IDM0Mi40MzIgMzcwLjk0NVYzNzAuOTQ3QzM0MC41MzQgMzc5LjY0MSAzNDYuMDE4IDM4OC4yMzQgMzU0LjcwNCAzOTAuMTc0TDQyNC41NTIgNDA5LjMzNkM0MzUuOTAzIDQxMS44NjkgNDM1LjM3NiA0MTIuNTI3IDQzNy44MjEgNDM2LjQ5NkM0NDEuODY4IDQ3Mi40NjUgNDY4LjU3NSA1MDEuOTc5IDUwNC4yMTggNTA5LjkzNEM1NDkuODY4IDUyMC4xMjMgNTk1LjAwNyA0OTEuNjM3IDYwNC44NyA0NDYuNDc5QzYxMS45MDUgNDE0LjI3NyA2MDcuMjcgMzg1LjY4MiA1ODIuOTAzIDM2MS44NjdDNjE0LjkyNyAzNTAuNjM5IDYzMS4wNDIgMzI2LjY3NiA2MzguMDc3IDI5NC40NzNDNjQ3Ljk0MiAyNDkuMzE0IDYxOC44NjggMjA0LjI2MiA1NzMuMjE4IDE5NC4wNzJaTTMxOS45OTkgMEMzMTEuMTU1IDAgMzAzLjk5OSA3LjE1NiAzMDMuOTk5IDE2VjExMkMzMDMuOTk5IDEyMC44NDQgMzExLjE1NSAxMjggMzE5Ljk5OSAxMjhTMzM1Ljk5OSAxMjAuODQ0IDMzNS45OTkgMTEyVjE2QzMzNS45OTkgNy4xNTYgMzI4Ljg0MyAwIDMxOS45OTkgMFpNMjI4LjY4NiAxNTUuMzEyQzIzMS44MTEgMTU4LjQzOCAyMzUuOTA1IDE2MCAyMzkuOTk5IDE2MFMyNDguMTg2IDE1OC40MzggMjUxLjMxMSAxNTUuMzEyQzI1Ny41NjEgMTQ5LjA2MiAyNTcuNTYxIDEzOC45MzcgMjUxLjMxMSAxMzIuNjg4TDE4Ny4zMTEgNjguNjg4QzE4MS4wNjEgNjIuNDM4IDE3MC45MzYgNjIuNDM4IDE2NC42ODYgNjguNjg4UzE1OC40MzYgODUuMDYzIDE2NC42ODYgOTEuMzEyTDIyOC42ODYgMTU1LjMxMlpNMzk5Ljk5OSAxNjBDNDA0LjA5MyAxNjAgNDA4LjE4NiAxNTguNDM4IDQxMS4zMTEgMTU1LjMxMkw0NzUuMzExIDkxLjMxMkM0ODEuNTYxIDg1LjA2MiA0ODEuNTYxIDc0LjkzNyA0NzUuMzExIDY4LjY4OFM0NTguOTM2IDYyLjQzOCA0NTIuNjg2IDY4LjY4OEwzODguNjg2IDEzMi42ODhDMzgyLjQzNiAxMzguOTM4IDM4Mi40MzYgMTQ5LjA2MyAzODguNjg2IDE1NS4zMTJDMzkxLjgxMSAxNTguNDM4IDM5NS45MDUgMTYwIDM5OS45OTkgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoneBreak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M278.251 358.619L208.546 377.75C176.811 384.834 173.327 404.633 170.401 432.848C167.85 455.156 151.218 473.361 128.882 478.348C100.563 484.668 72.44 467.266 66.376 439.504C61.335 416.432 64.139 397.043 83.427 381.609L83.399 381.486C91.802 374.822 95.489 364.166 93.225 353.801C90.962 343.438 83.177 335.34 72.78 332.873L72.753 332.75C48.831 326.961 38.21 310.568 33.169 287.496C27.104 259.736 45.364 231.98 73.68 225.658C96.018 220.674 118.688 230.105 130.296 249.254C144.704 273.6 156.11 290.074 187.846 282.992L273.776 263.811C282.405 261.885 287.856 253.252 285.95 244.531C284.046 235.809 275.505 230.299 266.876 232.225L180.946 251.406C169.595 253.939 169.8 253.117 157.598 232.42C138.942 201.518 102.423 186.117 66.782 194.072C21.132 204.264 -7.943 249.312 1.923 294.471C8.956 326.674 25.073 350.639 57.096 361.865C32.727 385.68 28.093 414.275 35.128 446.479C44.993 491.637 90.132 520.123 135.78 509.934C171.423 501.979 198.13 472.465 202.178 436.494C204.622 412.527 204.095 411.869 215.446 409.336L285.294 390.174C293.979 388.234 299.466 379.641 297.565 370.945C295.655 362.195 286.993 356.668 278.251 358.619ZM573.218 194.072C537.575 186.119 501.057 201.516 482.401 232.42C470.198 253.119 470.403 253.939 459.052 251.406L373.122 232.225C364.493 230.299 355.954 235.809 354.048 244.529C352.143 253.252 357.593 261.885 366.221 263.811L452.151 282.992C483.887 290.076 495.296 273.6 509.702 249.254C521.309 230.105 543.979 220.672 566.317 225.66C594.636 231.98 612.893 259.736 606.829 287.496C601.79 310.57 591.167 326.961 567.245 332.75L567.218 332.875C556.823 335.34 549.038 343.437 546.772 353.801C544.509 364.164 548.198 374.824 556.598 381.488L556.571 381.609C575.858 397.043 578.663 416.432 573.624 439.504C567.559 467.268 539.434 484.668 511.118 478.348C488.78 473.361 472.147 455.156 469.596 432.85C466.671 404.633 463.188 384.834 431.452 377.75L361.747 358.619C353.007 356.668 344.345 362.195 342.432 370.945V370.947C340.534 379.641 346.018 388.234 354.704 390.174L424.552 409.336C435.903 411.869 435.376 412.527 437.821 436.496C441.868 472.465 468.575 501.979 504.218 509.934C549.868 520.123 595.007 491.637 604.87 446.479C611.905 414.277 607.27 385.682 582.903 361.867C614.927 350.639 631.042 326.676 638.077 294.473C647.942 249.314 618.868 204.262 573.218 194.072ZM319.999 0C311.155 0 303.999 7.156 303.999 16V112C303.999 120.844 311.155 128 319.999 128S335.999 120.844 335.999 112V16C335.999 7.156 328.843 0 319.999 0ZM228.686 155.312C231.811 158.438 235.905 160 239.999 160S248.186 158.438 251.311 155.312C257.561 149.062 257.561 138.937 251.311 132.688L187.311 68.688C181.061 62.438 170.936 62.438 164.686 68.688S158.436 85.063 164.686 91.312L228.686 155.312ZM399.999 160C404.093 160 408.186 158.438 411.311 155.312L475.311 91.312C481.561 85.062 481.561 74.937 475.311 68.688S458.936 62.438 452.686 68.688L388.686 132.688C382.436 138.938 382.436 149.063 388.686 155.312C391.811 158.438 395.905 160 399.999 160Z" />
    </Icon>
);

export default BoneBreak;