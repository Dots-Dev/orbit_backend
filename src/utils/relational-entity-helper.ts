import { instanceToPlain } from 'class-transformer';
import { AfterLoad, BaseEntity } from 'typeorm';

export class EntityRelationalHelper extends BaseEntity {
  __entity?: string;

  @AfterLoad()
  /**
   * Set the entity name based on the constructor name.
   */
  setEntityName() {
    this.__entity = this.constructor.name;
  }

  /**
   * Convert the instance to a plain object.
   *
   * @return {any} the plain object representation of the instance
   */
  toJSON(): any {
    return instanceToPlain(this);
  }
}
