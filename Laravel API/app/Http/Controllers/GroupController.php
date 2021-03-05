<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{

    public function index()
    {
        return Group::latest()->paginate();
    }

    public function store(Request $request)
    {
        $group = Group::create($request->all());

        return response()->json($group, 201);
    }

    public function show(Group $group)
    {
        return $group;
    }

    public function insert(Request $request)
    {
        $group = new Group();
        $group->name = $request->input('name');
        $group->save();
        return response()->json($group);
    }

    public function destroy(Group $group)
    {
        $group->delete();
        return response()->json([
            'message' => 'Succes'
        ]);
    }
}
