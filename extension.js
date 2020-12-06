/* extension.js
 *
 * Copyright (C) 2020
 *      Daniel Shchur (DocQuantum) <shchurgood@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/* exported init */

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const SystemdBoot = Me.imports.systemdBoot;
const Grub = Me.imports.grub;
const Main = imports.gi.ui.main; 

const BootLoaderType = {
    0: SYSTEMD_BOOT,
    1: GRUB
};

const BootLoaderClass = {
    0: SystemdBoot,
    1: Grub
};



function init() {
    return new Extension();
}

class Extension {
    constructor() {
        this._bootOptions = null;
        this._currentSetOption = null;
        this._currentBootLoader = null;
    }

    enable() {
        _enable();
    }

    disable() {
        _disable();
    }
}

function _enable() {
    this._currentBootLoader = getCurrentBootloader();
}

function _disable() {

}