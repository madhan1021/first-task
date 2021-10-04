<?php
namespace task1\WorkOrder;

use PDO;
use PDOException;

class OrderInsert
{
  function insertDataUsingObjects($data){
    try {
      $conn = new pdo("pgsql:host=localhost;dbname=training", "postgres", "newpost12345");

//      $create_query = ("create table cms.workorders(
//        id SERIAL primary key,
//        contractor_name varchar,
//        wo_number numeric,
//        wo_date date,
//        wo_desc varchar,
//        cre_ts timestamptz");
//      $conn->query($create_query);
//      var_dump($data);
      $date = (isset($data->workOrder_date) && strlen($data->workOrder_date) > 0)?"'".$data->workOrder_date."'":"null";

      $insert_query= ("insert into cms.workorders(
                       contractor_name,
                        wo_number,
                        wo_date,
                        wo_desc,
                        cre_ts)
                        values (
                        '{$data->contractor_name}',
                         {$data->workOrder_number},
                         {$date},
                        '$data->workOrder_description',
                        timezone('Asia/Kolkata',now()))");

      $conn->query($insert_query);
      $conn=null;
    }
    catch (PDOException $exception) {
      echo $exception->getMessage();
    }

    return $data;
  }
}

