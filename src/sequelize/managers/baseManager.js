/*
 * *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

const moment = require('moment');

module.exports = class BaseManager {

  getEntity() {
    return null;
  }

  find(object) {

    object = object || {};

    if (object.limit && object.limit == -1)
      delete object.limit;

    return this.getEntity().findAll(object);
  }

  create(object) {
    if (this.getEntity().attributes.createdAt)
      object.createdAt = moment.utc().valueOf();

    return this.getEntity().create(object);
  }

  findById(id, include) {
    return this.getEntity().findById(id, {
      include: include
    });
  }


};