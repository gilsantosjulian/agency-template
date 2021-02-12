<?php

  $zip = new ZipArchive;
  $file = array_shift(array_values(glob(getcwd().'/*.zip')));

  try {
    $zip->open($file);
    $zip->extractTo(getcwd());
    $zip->close();
    echo 'File: '.$file.' has been extracted';
  } catch (Exception $e) {
    echo $e->getMessage();
  }

?>