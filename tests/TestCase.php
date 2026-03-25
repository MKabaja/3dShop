<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    /**
     * Assert that a model exists in the database.
     */
    public function assertModelExists($model)
    {
        $this->assertDatabaseHas($model->getTable(), [$model->getKeyName() => $model->getKey()]);
    }

    /**
     * Assert that a model does not exist in the database.
     */
    public function assertModelMissing($model)
    {
        $this->assertDatabaseMissing($model->getTable(), [$model->getKeyName() => $model->getKey()]);
    }

    /**
     * Assert that a model is soft deleted.
     */
    public function assertModelSoftDeleted($model)
    {
        $this->assertSoftDeleted($model->getTable(), [$model->getKeyName() => $model->getKey()]);
    }
}
